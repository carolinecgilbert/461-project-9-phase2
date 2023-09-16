import { BusFactor, Responsiveness, Correctness, License, RampUp } from "./metrics";

describe("BusFactor", () => {
	it("should return a bus factor", async () => {
		const busFactorMetric = new BusFactor("neovim", "neovim");
		const score = await busFactorMetric.evaluate();
		expect(score).toBeDefined();
		expect(busFactorMetric.name).toBe("BusFactor");
	});
});

describe("Responsiveness", () => {
	it("should return a responsiveness score", async () => {
		const respMetric = new Responsiveness("neovim", "neovim");
		const score = await respMetric.evaluate();
		expect(score).toBeDefined();
		expect(respMetric.name).toBe("Responsiveness");
	});
});

describe("License", () => {
	it("should return a license score", async () => {
		const licenseMetric = new License("neovim", "neovim");
		const score = await licenseMetric.evaluate();
		expect(score).toBeDefined();
		expect(licenseMetric.name).toBe("License");
	});
	it("should indicate if a license is *NOT* GPL", async () => {
		const licenseMetric = new License("neovim", "neovim");
		const score = await licenseMetric.evaluate();
		expect(score).toBeDefined();
		expect(licenseMetric.name).toBe("License");
		expect(score).toBe(0);
	});
	it("should indicate if a license is GPL", async () => {
		const licenseMetric = new License("gwpy", "gwpy");
		const score = await licenseMetric.evaluate();
		expect(score).toBeDefined();
		expect(licenseMetric.name).toBe("License");
		expect(score).toBe(1);
	});
});

describe("RampUp", () => {
	it("should return a rampup score", async () => {
		const rampUpMetric = new RampUp("neovim", "neovim");
		const score = await rampUpMetric.evaluate();
		expect(score).toBeDefined();
		expect(rampUpMetric.name).toBe("RampUp");
	});
});

describe("Correctness", () => {
	it("should return a correctness score", async () => {
		const correctnessMetric = new Correctness("neovim", "neovim");
		const score = await correctnessMetric.evaluate();
		expect(score).toBeDefined();
		expect(correctnessMetric.name).toBe("Correctness");
	});
});
