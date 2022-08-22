const { comments, posts, replies, users } = require("../sampleData");

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } = require("graphql");


// Comment Type
const CommentType = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        id: {type: GraphQLID},
        userId: {type: GraphQLID},
        postId: {type: GraphQLID},
        upVotes: {type: GraphQLID},
        comment: {type: GraphQLString},
        createdAt: {type: GraphQLString}
    })
})

// Post Type
const PostType = new GraphQLObjectType({
    name: "PostType",
    fields: () => ({
        id: {type: GraphQLID},
        post: {type: GraphQLString},
        poster: {type: GraphQLID},
        createdAt: {type: GraphQLString}
    })
})


// Reply Type
const ReplyType = new GraphQLObjectType({
    name: "ReplyType",
    fields: () => ({
        id: {type: GraphQLID},
        commentId: {type: GraphQLID},
        commenter: {type: GraphQLID},
        reply: {type: GraphQLString}
    })
})


// User Type
const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        createdAt: {type: GraphQLString}
    })
})




const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        comment: {
            type: CommentType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return comments.find(comment => comment.id === args.id)
            }
        },
        post: {
            type: PostType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return posts.find(post => post.id === args.id)
            }
        },
        reply: {
            type: ReplyType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return replies.find(reply => reply.id === args.id)
            }
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return users.find(user => user.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
})
