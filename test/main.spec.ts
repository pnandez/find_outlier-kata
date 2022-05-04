/* eslint-disable object-curly-spacing */
import { findOutlier } from "../src/main";

/**
 * Test cases
 * findOutlier([0, 1, 2]) => 1
 * findOutlier([1, 2, 3]) => 2
 * findOutlier([2, 6, 8, 10, 3]) => 3
 * findOutlier([0]) => 0
 */

describe("Simple tests", () => {
  it("should return the different number", () => {
    expect(findOutlier([0, 1, 2])).toBe(1);
    expect(findOutlier([1, 2, 3])).toBe(2);
    expect(findOutlier([2, 6, 8, 10, 3])).toBe(3);
    expect(findOutlier([0])).toBe(0);
  });
});

