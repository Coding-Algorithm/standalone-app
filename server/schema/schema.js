const { comments, posts, replies, users } = require("../sampleData");

const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLList,
	GraphQLSchema,
} = require("graphql");
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const Reply = require("../models/Reply");
const User = require("../models/User");

// Comment Type
const CommentType = new GraphQLObjectType({
	name: "Comment",
	fields: () => ({
		id: { type: GraphQLID },
		userId: { type: GraphQLID },
		postId: { type: GraphQLID },
		upVotes: { type: GraphQLID },
		comment: { type: GraphQLString },
		createdAt: { type: GraphQLString },
	}),
});

// Post Type
const PostType = new GraphQLObjectType({
	name: "PostType",
	fields: () => ({
		id: { type: GraphQLID },
		post: { type: GraphQLString },
		poster: { type: GraphQLID },
		createdAt: { type: GraphQLString },
        comment: {
            type: CommentType,
            resolve(parent, args){
                Comment.findById(parent.id)
            }
        }
	}),
});

// Reply Type
const ReplyType = new GraphQLObjectType({
	name: "ReplyType",
	fields: () => ({
		id: { type: GraphQLID },
		commentId: { type: GraphQLID },
		commenter: { type: GraphQLID },
		reply: { type: GraphQLString },
	}),
});

// User Type
const UserType = new GraphQLObjectType({
	name: "UserType",
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		createdAt: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {

        comments: {
            type: new GraphQLList(CommentType),
            resolve(parent, args){
                return Comment.find()
            }
        },

		comment: {
			type: CommentType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Comment.findById(args.id);
			},
		},

        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return Post.find()
            },
        },
		post: {
			type: PostType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Post.findById(args.id);
			},
		},

        replies: {
            type: new GraphQLList(ReplyType),
            resolve(parent, args) {
                return Reply.find()
            }
        },
		reply: {
			type: ReplyType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Reply.findById(args.id);
			},
		},

        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return User.find()
            }
        },
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return User.findById(args.id);
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
