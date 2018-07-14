import GraphQLJSON from 'graphql-type-json'
import shortid from 'shortid'


export default {
    JSON: GraphQLJSON,


    Query: {
        allHeroes: (root, args, {db}) => db.get('heroes').value(),
    },

    Mutation: {
        addHero: (root, {hero}, {pubsub, db}) => {
            const newHero = {
                id: shortid.generate(),
                name: hero.name,
                image: hero.image || '',
                twitterLink: hero.twitterLink || '',
                githubLink: hero.githubLink || ''
            };
            db
                .get('heroes')
                .push(newHero)
                .last()
                .write();

            pubsub.publish('heroes', {addHero: newHero})

            return newHero
        },
        deleteHero: (root, {name}, {db}) => {
            db
                .get('heroes')
                .remove({ name })
                .write();

            return true;
        },
    },
}
