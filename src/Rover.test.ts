import { describe, it, expect } from "vitest";
import { Rover } from "./Rover";

describe("Rover", () => {
  it("should start at position 0:0:N", () => {
    const rover = new Rover();
    expect(rover.execute("")).toBe("0:0:N");
  });

  it("should have position 2:3:N when navigated with MMRMMLM", () => {
    const rover = new Rover();
    expect(rover.execute("MMRMMLM")).toBe("2:3:N");
  });
});
