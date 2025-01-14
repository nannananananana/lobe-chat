import { genUserLLMConfig } from '@/utils/genUserLLMConfig'
import { DEFAULT_AGENT_CONFIG } from '@/const/settings';

export const DEFAULT_LLM_CONFIG = genUserLLMConfig({
  qwen: {
    enabled: true,
  },
});

let embeddingModelType = 'text-embedding-v3';
let defaultModelType = 'qwen-max-latest';
let defaultModelProvider = 'qwen';
try {
  if (DEFAULT_AGENT_CONFIG.provider === 'qwen'){
    embeddingModelType = 'text-embedding-v3';
    defaultModelType = 'qwen-max-latest';
    defaultModelProvider = 'qwen';
  }else if (DEFAULT_AGENT_CONFIG.provider === 'openai'){
    embeddingModelType = 'text-embedding-3-small';
    defaultModelType = 'gpt-4o-mini';
    defaultModelProvider = 'openai';
  }
}catch(err){
  console.error('❌ Provider type is nor supported:', err);
}

export const DEFAULT_EMBEDDING_MODEL = embeddingModelType;
export const DEFAULT_MODEL = defaultModelType;
// export const DEFAULT_PROVIDER = defaultModelProvider;
export const DEFAULT_PROVIDER = defaultModelProvider