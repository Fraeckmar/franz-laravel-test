class Session {
	static storage = window.sessionStorage
    
	static get(key) {
        const value = this.storage.getItem(key) || null;
        if (value == 'undefined' || value == 'null') {
            return null
        }
        return JSON.parse(value);
    }

    static set(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    static remove(key) {
        this.storage.removeItem(key);
    }

	static userInfo() {
		return this.get('user') || null
	}
}

export default Session