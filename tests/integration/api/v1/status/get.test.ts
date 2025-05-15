describe("Test /api/v1/ GET routes", () => {
  test("GET to /api/v1/status should return 200", async () => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);

    const body = await response.json();

    expect(body.updated_at).toMatch(dateRegex);
    expect(body.database).toEqual({
      current_connections: 1,
      max_connections: 100,
      version: "16.9",
    });
  });
});
