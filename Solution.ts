function formatValue(
	input: string | number | boolean
): string | number | boolean {
	if (typeof input === "string") {
		return input.toUpperCase();
	} else if (typeof input === "number") {
		return input * 10;
	} else if (typeof input === "boolean") {
		return !input;
	}

	return "Invalid input . . .";
}

function getLength(input: string | any[]): number | string {
	if (typeof input === "string") {
		return input.length;
	} else if (Array.isArray(input)) {
		return input.length;
	}

	return "Invalid input . . .";
}

class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	getDetails(): string {
		return `'Name: ${this.name}, Age: ${this.age}'`;
	}
}

interface Books {
	title: string;
	rating: number;
}

function filterByRating(books: Books[]): Books[] {
	return books.filter((book) => {
		if (book.rating < 0 || book.rating > 5) {
			console.error(
				`Invalid rating for "${book.title}". Rating must be between 0 and 5.`
			);
			return false;
		}

		return book.rating >= 4;
	});
}

interface User {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
	if (!Array.isArray(users)) {
		throw new Error("Input must be an array of user objects!");
	}

	return users.filter((user) => {
		if (
			typeof user.id !== "number" ||
			typeof user.name !== "string" ||
			typeof user.email !== "string" ||
			typeof user.isActive !== "boolean"
		) {
			console.error("Invalid user object: ", user);
			return false;
		}

		return user.isActive;
	});
}

interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
}

function printBookDetails(book: Book): void {
	if (
		typeof book.title !== "string" ||
		typeof book.author !== "string" ||
		typeof book.publishedYear !== "number" ||
		typeof book.isAvailable !== "boolean"
	) {
		throw new Error("Invalid book object...");
	}

	const availability: string = book.isAvailable ? "Yes" : "No";
	console.log(
		`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
	);
}

type ArrayElement = string | number;

function getUniqueValues(
	array1: ArrayElement[],
	array2: ArrayElement[]
): ArrayElement[] {
	const result: ArrayElement[] = [];

	const exists = (array: ArrayElement[], value: ArrayElement): boolean => {
		for (let i = 0; i < array.length; i++) {
			if (array[i] === value) return true;
		}
		return false;
	};

	for (let i = 0; i < array1.length; i++) {
		if (!exists(result, array1[i])) result.push(array1[i]);
	}

	for (let i = 0; i < array2.length; i++) {
		if (!exists(result, array2[i])) result.push(array2[i]);
	}

	return result;
}

interface Product {
	name: string;
	price: number;
	quantity: number;
	discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
	if (!Array.isArray(products))
		throw new Error("Input must be an array of products...");

	return products.reduce((totalPrice, product) => {
		if (
			typeof product.price !== "number" ||
			typeof product.quantity !== "number" ||
			product.price < 0 ||
			product.quantity < 0
		)
			throw new Error("Price and quantity must be non-negative number!");

		if (product.discount !== undefined) {
			if (
				typeof product.discount !== "number" ||
				product.discount < 0 ||
				product.discount > 100
			)
				throw new Error("Discount must be a number between 0 and 100");
		}

		const discount = product.discount ?? 0;

		return (
			totalPrice + product.price * product.quantity * (1 - discount / 100)
		);
	}, 0);
}
