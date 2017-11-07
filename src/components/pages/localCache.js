class LocalCache {

    constructor() {
        this.players= [] ;
    }

    getAll() {
        return this.players ;
    }

    populate(players) {
        this.players = players;
    }
}

export default (new LocalCache() );
