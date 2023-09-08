export type JSONReturnType =
	| string
	| number
	| boolean
	| { [x: string]: JSONReturnType }
	| JSONReturnType[]
	| null

export async function ProperFetch(
	input: RequestInfo | URL,
	init?: RequestInit | undefined
): Promise<JSONReturnType> {
	try {
		const response = await fetch(input, init)

		if (response.ok) {
			return response.json() as Promise<JSONReturnType>
		} else {
			console.error('Responded with an error:' + (await response.json()))
			return null
		}
	} catch (error: any) {
		console.error(`Error in fetch call: ${error}`)
		return null
	}
}
