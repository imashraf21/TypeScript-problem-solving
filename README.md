# Problem Solving with TypeScript

## ১। TypeScript-এ interface এবং types এর মাঝে পার্থক্য কি?

**উত্তরঃ** TypeScript-এ `interface` এবং `type` উভয়ই ডাটার ধরন বুঝাতে ব্যবহার করা হয়। একই রকম হলেও `interface` মূলত `class` বা `object` এর জন্য ব্যবহার করা হয় যা কিনা **extend** করা যায়। একই নামের `interface` হলে তারা সয়ংক্রিয়ভাবে **merged** হয়।

উদাহরণঃ

```ts
interface Book {
	title: string;
	author: String;
}

// *একই নামের interface*
interface Book {
	publishYear: number;
}

//*Book interface-এ title, author এবং publishYear সবাই অন্তর্ভুক্ত হবে*
const myBook: Book = {
	title: "As I Lay Dying",
	author: "William Faulkner",
	publishYear: 1930,
};

// *extend করে নতুন interface*
interface TextBook extends Book {
	grade: number;
}

const myTextBook: TextBook = {
	title: "As I Lay Dying",
	author: "William Faulkner",
	publishYear: 1930,
	grade: 10,
};
```

অন্যদিকে `type` এর ব্যবহার বহুমুখী। এটি যে কোন `type` এর হতে পারে, পাশাপাশি `union`, `intersection` এবং জটিল টাইপের জন্য বেশি ব্যবহার উপযোগী। তবে এটি **extend** করা যায় না।

উদাহরণঃ

```ts
// অবজেক্ট
type Person = {
	name: string;
	age: number;
};

// *Union টাইপ*
type ID = number | string;

// *Intersection টাইপ*
type Student = Person & { id: number };

// *Tuple*
type point = [number, number];

//*একটি ভ্যারিয়েবলে যার টাইপ ID, সেখানে সংখ্যা বা স্ট্রিং থাকতে পারে*
const myID: ID = "abc-123";
```

## ২। উদাহরণসহ TypeScript-এ keyof কী ওয়ার্ড এর ব্যবহার লিখ।

**উত্তরঃ** `keyof` একটি টাইপ অপারেটর, যা একটি অবজেক্টের সকল `key` গুলোর `union` টাইপ তৈরি করে। এটি সাধারণত অবজেক্টের প্রপার্টি নামগুলো পেতে ব্যবহার করা হয়। যেমন, যদি কোন অবজেক্ট টাইপের 'A', 'B' এবং 'C' নামে প্রপার্টি থাকে, তবে `keyof` সেই টাইপটির জন্য 'A' | 'B' | 'C' ইউনিয়ন টাইপ তৈরি করে। এটি মূলত জেনেরিক ফাংশন তৈরির সময় একটি অবজেক্টের বৈধ কী যাচাই করতে উপযোগী।

উদাহরণঃ

```ts
// একটি অবজেক্ট টাইপ
type Person = {
	name: string;
	age: number;
	address: string;
};

// PersonKeys টাইপ হবে: "name" | "age" | "address"
type PersonKeys = keyof Person;

// ফাংশনে keyof ব্যবহার
function getProperty(object: Person, key: keyof Person) {
	return object[key]; // অবজেক্টের প্রপার্টি অ্যাক্সেস করা
}
```
