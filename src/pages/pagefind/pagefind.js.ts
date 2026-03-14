export async function GET() {
	return new Response(
		"export const init = () => {}; export const search = () => { return { results: [] } }",
		{
			headers: {
				"content-type": "application/javascript",
			},
		},
	);
}
