import { expect } from '@jest/globals';
import { TestScheduler } from 'jest';
import fb from './fizzbuzz';

describe('FizzBuzz TDD kata', ()=>{
    test('should do something', ()=>{
        expect(fb(1)).toBe(1)
    });
});