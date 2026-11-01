import { test, expect } from "@playwright/test";

test("homepage renders streamlined projects with ImageFolder videos and images emphasized", async ({
  page,
}) => {
  await page.goto("/");

  // Check hero photo is visible
  await expect(page.locator(".hero-photo-img")).toBeVisible();

  // Check 8 project cards are present in ordered list
  const projectCards = page.locator(".compact-project-card");
  await expect(projectCards).toHaveCount(8);

  // Verify exact requested sequence:
  // 1) Wiring Harness
  await expect(projectCards.nth(0)).toHaveId("wiring-harness-navigation");

  // 2) ICIA - SmartRTMS alone
  await expect(projectCards.nth(1)).toHaveId("smart-rtms");

  // 3) ICIA - PLC Data Acquisition in which add that video alone
  await expect(projectCards.nth(2)).toHaveId("icia-plc-data-acquisition");

  // 4) AED
  await expect(projectCards.nth(3)).toHaveId("defibrillator-electronics");

  // 5) ECG Simulator
  await expect(projectCards.nth(4)).toHaveId("ecg-waveform-simulator");

  // 6) BharatPD
  await expect(projectCards.nth(5)).toHaveId("portable-peritoneal-dialysis");

  // 7) Anna University
  await expect(projectCards.nth(6)).toHaveId("code2board-workshop");

  // 8) SA Engineering College
  await expect(projectCards.nth(7)).toHaveId("sa-college-hackathon-jury");

  // Verify hardware gallery with thumbnails for Wiring Harness
  const wiringCard = page.locator("#wiring-harness-navigation");
  await expect(wiringCard).toBeVisible();
  const wiringThumbs = wiringCard.locator(".thumbnail-btn");
  await expect(wiringThumbs).toHaveCount(11);

  // Test thumbnail click switches image
  await wiringThumbs.nth(1).click();
  await expect(wiringThumbs.nth(1)).toHaveClass(/active/);

  // Test lightbox open and close
  await wiringCard.locator(".stage-clickable").click();
  const lightbox = page.locator(".lightbox-overlay");
  await expect(lightbox).toBeVisible();
  await page.locator(".lightbox-close").click();
  await expect(lightbox).not.toBeVisible();

  // Verify theme toggle works
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("all project pages and metadata endpoints respond", async ({
  page,
  request,
}) => {
  const projectSlugs = [
    "wiring-harness-navigation",
    "smart-rtms",
    "icia-plc-data-acquisition",
    "defibrillator-electronics",
    "ecg-waveform-simulator",
    "portable-peritoneal-dialysis",
    "code2board-workshop",
    "sa-college-hackathon-jury",
  ];

  for (const slug of projectSlugs) {
    const response = await request.get(`/projects/${slug}`);
    expect(response.status(), slug).toBe(200);
  }

  for (const path of [
    "/robots.txt",
    "/sitemap.xml",
    "/opengraph-image",
    "/icon.svg",
  ]) {
    const res = await request.get(path);
    expect(res.status(), path).toBe(200);
  }

  expect((await request.get("/projects/nonexistent")).status()).toBe(404);
});

for (const viewport of [
  { width: 1440, height: 1000 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
  { width: 320, height: 740 },
]) {
  test(`responsive layout ${viewport.width}px and reduced motion`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.emulateMedia({ reducedMotion: "reduce" });
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));

    await page.goto("/");

    await expect(page.locator(".compact-hero-title")).toBeVisible();
    await expect(page.locator(".compact-project-card")).toHaveCount(8);
    await expect(page.locator(".certificate-section-card")).toBeVisible();

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth
      )
    ).toBe(true);

    await page.screenshot({
      path: `test-results/home-${viewport.width}.png`,
      fullPage: true,
    });

    expect(errors).toEqual([]);
  });
}
