// Projects
const comments = [
	{
		id: "1",
		userId: "1",
		postId: "1",
		upVotes: [],
		comment:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
		createdAt: "",
	},
	{
		id: "2",
		userId: "2",
		postId: "2",
		upVotes: [],
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
		createdAt: "",
	},
	{
		id: "3",
		userId: "3",
		postId: "3",
		upVotes: [],
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
		createdAt: "",
	},
	{
		id: "4",
		userId: "4",
		postId: "3",
		upVotes: [],
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
		createdAt: "",
	},
	{
		id: "5",
		userId: "5",
		postId: "4",
		upVotes: [],
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
		createdAt: "",
	},
];

// Users
const users = [
	{
		id: "1",
		name: "Tony Stack"
	},
	{
		id: "2",
		name: "Natasha Romanova"
	},
	{
		id: "3",
		name: "Thor Odinson"
	},
	{
		id: "4",
		name: "Steve Rogers"
	},
	{
		id: "5",
		name: "Bruce Banner"
	},
];

// Posts
const posts = [
	{
		id: "1",
		createdAt: "",
		post: "I am a sample post 1",
		author: "1",
	},	{
		id: "2",
		createdAt: "",
		post: "I am a sample post 2",
		author: "1",
	},	{
		id: "3",
		createdAt: "",
		post: "I am a sample post 3",
		author: "2",
	},
];

// Replies
const replies = [
	{
		id: "1",
		commentId: "1",
		commenter: "1",
		reply:
			"Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
	},
	{
		id: "2",
		commentId: "2",
		commenter: "2",
		reply:
			"Consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
	},
    {
		id: "3",
		commentId: "1",
		commenter: "2",
		reply:
			"Consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
	},
];

module.exports = { comments, users, posts, replies };
