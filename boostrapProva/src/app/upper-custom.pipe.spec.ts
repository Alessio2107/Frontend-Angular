import { UpperCustomPipe } from './upper-custom.pipe';

describe('UpperCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new UpperCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
