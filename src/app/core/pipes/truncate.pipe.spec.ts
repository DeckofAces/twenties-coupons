import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should return the same string if its length is less than or equal to the limit', () => {
    const text = 'Short text';
    expect(pipe.transform(text, 100)).toBe(text);
  });

  it('should truncate the string and add ellipsis if the string exceeds the limit', () => {
    const text =
      'This is a very long text that should be truncated by the pipe because it exceeds the given limit';
    const limit = 20;
    const expected = text.substring(0, limit) + '...';
    expect(pipe.transform(text, limit)).toBe(expected);
  });

  it('should use default limit of 100 when no limit is provided', () => {
    const text = 'a'.repeat(150);
    const expected = text.substring(0, 100) + '...';
    expect(pipe.transform(text)).toBe(expected);
  });
});
