import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { handlers } from './handlers';

//create mockup server 
export const server = setupServer(...handlers); // 여기 오류 뿜 TypeError: (0 , _msw.setupServer) is not a function


