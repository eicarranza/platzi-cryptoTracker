import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {
    // This class is created with the purpose to be instanced
    // everywhere. It consume less memory
    // This method only save string values. 
    static instance = new Storage();

    store = async (key, value) => {
        try{
            await AsyncStorage.setItem(key, value);
        } catch (err) {
            console.log("Storage store err", err);
            return false;
        }
    }

    get = async (key) => {
        try {
            return await AsyncStorage.getItem(key);

        } catch (err) {
            console.log("Storage err", err);

            throw Error(err);
        }
    }

    multiGet = async (keys) => {
        try {
            
            return await AsyncStorage.multiGet(keys);

        } catch(err) {
            console.log("Storage multiGet err", err);
            throw Error(err);
        }
    }
    
    getAllKeys = async () => {
        try {
            return await AsyncStorage.getAllKeys();

        } catch (err) {
            console.log("Storage getAllKeys err", err);

            throw Error(err);
        }
    }

    remove = async(key) => {
        try {
            await AsyncStorage.removeItem(key);
            
            return true;

        } catch (err) {
            console.log("Storage remove err", err);
            
            return false;
        }
    }
}

export default Storage;