type cardNumber = {
	cardnumber: string;
};

type cardDate = {
	cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: string };
//  above code is combination of 3 types
// 1. cardNumber, 2. cardDate, 3. cvv the resultant type will { cardnumber: string; cardDate: string; cvv: string; }
//  this is called intersection type

// ? Intersection types are different from union types (|), which represent values that can be any one of the specified types, not all of them simultaneously.

// When to Use Intersection Types
// Composing Complex Types: When you want to build complex types from simpler ones
// Mixins Pattern: When implementing mixin-style patterns where behavior is composed
// API Design: When different components of your API need to share common structures
// State Management: For combining different aspects of state

type UserBasicInfo = { id: number; name: string };
type UserContactInfo = { email: string; phone: string };
type UserPreferences = { theme: string; notifications: boolean };

// Complete user profile combines all three aspects
type UserProfile = UserBasicInfo & UserContactInfo & UserPreferences;
