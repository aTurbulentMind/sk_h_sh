// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

//these are the variables for the products

class Product {
	id: string
	name: string
	price: number
	image: image
	info: string
	colors: variable
}
	
	// this is the vari for the cart

	class CartItem {
		id: string
		quantity: number
}
}

export {};
