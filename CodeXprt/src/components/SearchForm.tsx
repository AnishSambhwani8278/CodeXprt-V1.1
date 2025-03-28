import React from 'react';
import { motion } from 'framer-motion';
import Select from 'react-select';
import { Search } from 'lucide-react';
import { SearchFilters } from '../types';

const skillOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'cpp', label: 'C++' },
  { value: 'c', label: 'C' },
  { value: 'csharp', label: 'C#' },
  { value: 'rust', label: 'Rust' },
  { value: 'go', label: 'Go' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'php', label: 'PHP' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' },
  { value: 'scala', label: 'Scala' },
  { value: 'dart', label: 'Dart' },
  { value: 'elixir', label: 'Elixir' },
  { value: 'haskell', label: 'Haskell' },
  
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'remix', label: 'Remix' },
  
  { value: 'nodejs', label: 'Node.js' },
  { value: 'deno', label: 'Deno' },
  { value: 'django', label: 'Django' },
  { value: 'flask', label: 'Flask' },
  { value: 'fastapi', label: 'FastAPI' },
  { value: 'spring', label: 'Spring' },
  { value: 'laravel', label: 'Laravel' },
  { value: 'rails', label: 'Ruby on Rails' },
  { value: 'dotnet', label: '.NET' },
  
  { value: 'react-native', label: 'React Native' },
  { value: 'flutter', label: 'Flutter' },
  { value: 'ionic', label: 'Ionic' },
  
  { value: 'postgresql', label: 'PostgreSQL' },
  { value: 'mysql', label: 'MySQL' },
  { value: 'mongodb', label: 'MongoDB' },
  { value: 'redis', label: 'Redis' },
  { value: 'elasticsearch', label: 'Elasticsearch' },
  
  { value: 'docker', label: 'Docker' },
  { value: 'kubernetes', label: 'Kubernetes' },
  { value: 'aws', label: 'AWS' },
  { value: 'azure', label: 'Azure' },
  { value: 'gcp', label: 'Google Cloud' },
  
  { value: 'tensorflow', label: 'TensorFlow' },
  { value: 'pytorch', label: 'PyTorch' },
  { value: 'scikit-learn', label: 'scikit-learn' },
  
  { value: 'graphql', label: 'GraphQL' },
  { value: 'webassembly', label: 'WebAssembly' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'unity', label: 'Unity' },
  { value: 'godot', label: 'Godot' },
];

const projectTypeOptions = [
  { value: 'web-app', label: 'Web Applications' },
  { value: 'spa', label: 'Single Page Applications' },
  { value: 'pwa', label: 'Progressive Web Apps' },
  { value: 'jamstack', label: 'JAMstack Applications' },
  
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'desktop', label: 'Desktop Applications' },
  { value: 'cross-platform', label: 'Cross-platform Apps' },
  
  { value: 'api', label: 'API Services' },
  { value: 'microservices', label: 'Microservices' },
  { value: 'serverless', label: 'Serverless Applications' },
  { value: 'backend', label: 'Backend Services' },
  
  { value: 'cli', label: 'CLI Tools' },
  { value: 'devtools', label: 'Developer Tools' },
  { value: 'testing', label: 'Testing Tools' },
  { value: 'debugging', label: 'Debugging Tools' },
  
  { value: 'library', label: 'Libraries' },
  { value: 'framework', label: 'Frameworks' },
  { value: 'sdk', label: 'SDKs' },
  { value: 'plugin', label: 'Plugins & Extensions' },
  
  { value: 'data-science', label: 'Data Science' },
  { value: 'machine-learning', label: 'Machine Learning' },
  { value: 'analytics', label: 'Analytics Tools' },
  { value: 'data-visualization', label: 'Data Visualization' },
  
  { value: 'security', label: 'Security Tools' },
  { value: 'cryptography', label: 'Cryptography' },
  { value: 'authentication', label: 'Authentication & Authorization' },
  
  { value: 'cms', label: 'Content Management Systems' },
  { value: 'media', label: 'Media Processing' },
  { value: 'streaming', label: 'Streaming Solutions' },
  
  { value: 'game', label: 'Game Development' },
  { value: 'graphics', label: 'Graphics & Animation' },
  { value: '3d', label: '3D Rendering' },
  
  { value: 'education', label: 'Educational Tools' },
  { value: 'documentation', label: 'Documentation Tools' },
  { value: 'tutorial', label: 'Tutorials & Examples' },
];

interface SearchFormProps {
  onSearch: (SearchFilters) => void;
  isLoading: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const [skills, setSkills] = React.useState<string[]>([]);
  const [projectType, setProjectType] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ skills, projectType });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Skills
          </label>
          <Select
            isMulti
            options={skillOptions}
            className="rounded-lg"
            styles={{
              control: (provided, state) => ({
                ...provided,
                backgroundColor: state.isFocused ? 'white' : (state.isDark ? '#4A5568' : 'white'),
                borderColor: state.isFocused ? '#63B3ED' : (state.isDark ? '#718096' : '#CBD5E0'),
                boxShadow: state.isFocused ? '0 0 0 1px #63B3ED' : null,
                '&:hover': {
                  borderColor: '#63B3ED',
                },
                color: state.isFocused ? 'black' : (state.isDark ? 'white' : 'black'),
              }),
              menu: (provided, state) => ({
                ...provided,
                backgroundColor: state.isDark ? '#4A5568' : 'white',
                color: state.isDark ? 'white' : 'black',
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? '#63B3ED' : (state.isFocused ? '#A3BFDA' : (state.isDark ? '#4A5568' : 'white')),
                color: state.isSelected ? 'white' : (state.isDark ? 'white' : 'black'),
                '&:hover': {
                  backgroundColor: '#A3BFDA',
                },
              }),
              input: (provided, state) => ({
                ...provided,
                color: state.isDark ? 'white' : 'black',
              }),
              placeholder: (provided, state) => ({
                ...provided,
                color: state.isDark ? '#A0AEC0' : '#718096',
              }),
              singleValue: (provided, state) => ({
                ...provided,
                color: state.isDark ? 'white' : 'black',
              }),
            }}
            onChange={(selected) => setSkills(selected.map((item) => item.value))}
            placeholder="Select your skills..."
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#A3BFDA',
                primary: '#63B3ED',
              },
              base: {
                ...theme.base,
                backgroundColor: theme.isDark ? '#4A5568' : 'white',
                color: theme.isDark ? 'white' : 'black',
              }
              })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Project Type
          </label>
          <Select
            options={projectTypeOptions}
            className="rounded-lg"
            styles={{
              control: (provided, state) => ({
                ...provided,
                backgroundColor: state.isFocused ? 'white' : (state.isDark ? '#4A5568' : 'white'),
                borderColor: state.isFocused ? '#63B3ED' : (state.isDark ? '#718096' : '#CBD5E0'),
                boxShadow: state.isFocused ? '0 0 0 1px #63B3ED' : null,
                '&:hover': {
                  borderColor: '#63B3ED',
                },
                color: state.isFocused ? 'black' : (state.isDark ? 'white' : 'black'),
              }),
              menu: (provided, state) => ({
                ...provided,
                backgroundColor: state.isDark ? '#4A5568' : 'white',
                color: state.isDark ? 'white' : 'black',
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor: state.isSelected ? '#63B3ED' : (state.isFocused ? '#A3BFDA' : (state.isDark ? '#4A5568' : 'white')),
                color: state.isSelected ? 'white' : (state.isDark ? 'white' : 'black'),
                '&:hover': {
                  backgroundColor: '#A3BFDA',
                },
              }),
              input: (provided, state) => ({
                ...provided,
                color: state.isDark ? 'white' : 'black',
              }),
              placeholder: (provided, state) => ({
                ...provided,
                color: state.isDark ? '#A0AEC0' : '#718096',
              }),
              singleValue: (provided, state) => ({
                ...provided,
                color: state.isDark ? 'white' : 'black',
              }),
            }}
            onChange={(selected) => setProjectType(selected?.value || '')}
            placeholder="Select project type..."
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#A3BFDA',
                primary: '#63B3ED',
              },
              base: {
                ...theme.base,
                backgroundColor: theme.isDark ? '#4A5568' : 'white',
                color: theme.isDark ? 'white' : 'black',
              }
              })}
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium
            ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-indigo-700'} transition-colors`}
        >
          <Search size={20} />
          {isLoading ? 'Searching...' : 'Find Projects'}
        </button>
      </div>
    </motion.form>
  );
};
