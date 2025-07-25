/**
 * Application-wide constants
 */

// Current application version - static string updated by version manager
export const APP_VERSION = '2.6.3';

// Local storage keys
export const STORAGE_KEYS = {
  API_SETTINGS: 'studorama-api-settings',
  LANGUAGE: 'studorama-language',
  SESSIONS: 'studorama-sessions',
  THEME: 'studorama-theme',
  VERSION: 'studorama-app-version'
};

// Default values
export const DEFAULTS = {
  LANGUAGE: 'en-US',
  THEME: 'light',
  PRELOAD_QUESTIONS: 3,
  MODEL: 'gpt-4o-mini',
  SESSION_TIMER: 30, // minutes
  QUESTION_TIMER: 60 // seconds
};

// API related constants
export const API = {
  OPENAI_API_URL: 'https://api.openai.com/v1/chat/completions',
  OPENAI_KEY_PREFIX: 'sk-'
};

// Supported languages
export const SUPPORTED_LANGUAGES = ['en-US', 'pt-BR'];

// Supported themes
export const THEME_CATEGORIES = ['standard', 'focus', 'energy', 'calm'] as const;

// Cache names for service worker (updated automatically by version manager)
export const CACHE_NAMES = {
  STATIC: `studorama-static-v2.6.3`,
  DYNAMIC: `studorama-dynamic-v2.6.3`,
  MAIN: `studorama-v2.6.3`
};

// Static files to cache
export const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/apple-touch-icon.png'
];

// Keys to preserve during version migration
export const PRESERVED_STORAGE_KEYS = [
  STORAGE_KEYS.API_SETTINGS,
  STORAGE_KEYS.LANGUAGE,
  STORAGE_KEYS.SESSIONS,
  STORAGE_KEYS.THEME,
];
