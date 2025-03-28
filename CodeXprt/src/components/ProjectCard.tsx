import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, GitPullRequest } from 'lucide-react';
import { Repository } from '../types';

interface ProjectCardProps {
  project: Repository;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">{project.name}</h3>
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      
      <div className="flex items-center gap-4 mb-4">
        {project.language && (
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
            {project.language}
          </span>
        )}
        <div className="flex items-center text-yellow-600 dark:text-yellow-400">
          <Star size={16} className="mr-1" />
          <span>{project.stargazers_count}</span>
        </div>
        <div className="flex items-center text-green-600 dark:text-green-400">
          <GitPullRequest size={16} className="mr-1" />
          <span>{project.open_issues_count} issues</span>
        </div>
      </div>

      {project.issues && project.issues.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Open Issues</h4>
          <ul className="space-y-2">
            {project.issues.map((issue) => (
              <li key={issue.id} className="flex items-start gap-2">
                <a
                  href={issue.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 transition-colors"
                >
                  {issue.title}
                </a>
                <div className="flex gap-1">
                  {issue.labels.map((label) => (
                    <span
                      key={label.name}
                      className="px-2 py-0.5 text-xs rounded-full"
                      style={{
                        backgroundColor: `#${label.color}20`,
                        color: `#${label.color}`,
                      }}
                    >
                      {label.name}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};
