const { comments, posts, replies, users } = require("../sampleData");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
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
    upVotes: { type: GraphQLList(GraphQLString) },
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
      resolve(parent, args) {
        Comment.findById(parent.id);
      },
    },
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
    createdAt: { type: GraphQLString },
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

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find();
      },
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
      resolve(parent, args) {
        return Post.find();
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
        return Reply.find();
      },
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
      resolve(parent, args) {
        return User.find();
      },
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

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addComment: {
      type: CommentType,
      args: {
        userId: { type: GraphQLID, defaultValue: "63031b1f97db7e5120a283be" },
        postId: { type: GraphQLID, defaultValue: "Sample post" },
        upVotes: { type: GraphQLList(GraphQLString) },
        comment: { type: GraphQLNonNull(GraphQLString) },
        createdAt: {
          type: GraphQLNonNull(GraphQLString),
          defaultValue: Date.now().toString(),
        },
      },
      resolve(parent, args) {
        const comment = new Comment({
          userId: args.userId,
          postId: args.postId,
          upVotes: args.upVotes,
          comment: args.comment,
          createdAt: args.createdAt,
        });

        return comment.save();
      },
    },

    // addReply
    addReply: {
      type: ReplyType,
      args: {
        commentId: { type: GraphQLNonNull(GraphQLID) },
        commenter: { type: GraphQLID},
        reply: { type: GraphQLNonNull(GraphQLString) },
        createdAt: {
          type: GraphQLNonNull(GraphQLString),
          defaultValue: Date.now().toString(),
        },
      },
      resolve(parent, args) {
        const reply = new Reply({
          comment: args.commentId,
          commenter: args.commenter,
          reply: args.reply,
          createdAt: args.createdAt,
        });
        return reply.save();
      },
    },

    // upVote
    // upVote: {
    //   type: CommentType,
    //   args: {
    //     id: { type: GraphQLNonNull(GraphQLID) },
    //     userId: { type: GraphQLID },
    //     postId: { type: GraphQLID },
    //     upVotes: {
    //       type: GraphQLList(GraphQLString),
    //       args: {},
    //       resolve(parent, args) {
    //         // {

    //         // }
    //         console.log("Funny");
    //       },
    //     },
    //     comment: { type: GraphQLString },
    //     createdAt: { type: GraphQLString },
    //   },
    //   resolve(parent, args) {

    //     return (

    // 		// RootQuery.comment(`${args.id}`) {

    // 		// }

    // 	Comment.findByIdAndUpdate(
    //       args.id,
    //       {
    //         $set: {
    //           upVotes: args.upVotes,
    //         },
    //       },
    //       { new: true }
    //     ));
    //   },
    // },

    // Add Post
    addPost: {
      type: PostType,
      args: {
        post: { type: GraphQLNonNull(GraphQLString) },
        poster: { type: GraphQLNonNull(GraphQLID) },
        createdAt: {
          type: GraphQLNonNull(GraphQLString),
          defaultValue: Date.now().toString(),
        },
      },
      resolve(parent, args) {
        const post = new Post({
          post: args.post,
          poster: args.poster,
          createdAt: args.createdAt,
        });

        return post.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
