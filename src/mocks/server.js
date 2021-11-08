import { setupServer } from 'msw';
import { handlers } from './handlers';

//create mockup server 
export const server = setupServer(...handlers); // 여기 오류 뿜
