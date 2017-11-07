class LocalCache {

    constructor() {
        this.team = [] ;
    }

    getAll() {
        return this.players ;
    }

    populate(players) {
        this.players = players;
    }


}

export default (new LocalCache() );
