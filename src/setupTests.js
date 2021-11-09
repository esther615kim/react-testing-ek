import '@testing-library/jest-dom';

//setup mockup server API
import { server } from './mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
