import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon } from 'lucide-react';
import axios from 'axios';
import { SearchForm } from '../components/SearchForm';
import { ProjectCard } from '../components/ProjectCard';
import { Repository, SearchFilters } from '../types';

function OpenSourceFinder() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchProjects = async (filters: SearchFilters) => {
    setIsLoading(true);
    setError(null);

    try {
      const query = filters.skills.length > 0 ? `language:${filters.skills.join(' language:')} topic:${filters.projectType} good-first-issues:>0` : `topic:${filters.projectType} good-first-issues:>0`;
      const response = await axios.get(`https://api.github.com/search/repositories`, {
        params: {
          q: query,
          sort: 'stars',
          order: 'desc',
          per_page: 20,
        },
      });

      const repos = response.data.items;
      
      const reposWithIssues = await Promise.all(
        repos.map(async (repo: Repository) => {
          try {
            const issuesResponse = await axios.get(
              `https://api.github.com/repos/${repo.full_name}/issues`,
              {
                params: {
                  state: 'open',
                  labels: 'good first issue',
                  per_page: 5,
                },
              }
            );
            return { ...repo, issues: issuesResponse.data };
          } catch (issueError) {
            console.error(`Failed to fetch issues for ${repo.full_name}:`, issueError);
            return { ...repo, issues: [] }; 
          }
        })
      );

      setProjects(reposWithIssues);
    } catch (err) {
      setError('Failed to fetch projects. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GithubIcon size={40} className="text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              <span style={{ color: '#3A83F6' }}>Code</span>
              <span style={{ color: '#A855F8' }}>Xprt</span>
              <span style={{ marginLeft: '10px' }}>Open Source Finder</span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Find the perfect open source projects to contribute to based on your skills
          </p>
        </motion.div>

        <SearchForm onSearch={searchProjects} isLoading={isLoading} />

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-50 text-red-700 p-4 rounded-lg mb-8"
          >
            {error}
          </motion.div>
        )}

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {!isLoading && projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-12"
          >
            Enter your skills and preferred project type to find matching repositories
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default OpenSourceFinder;
