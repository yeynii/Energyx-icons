import { getDatabase, ref, set, onValue, off } from "firebase/database";
import { firebaseApp } from "./firebase";

class IcomoonFiles{
  db = getDatabase(firebaseApp);

  updateFiles(files) {
    const dbRef = ref(this.db, '/');
    return set(dbRef, files);
  }

  syncFiles(onUpdate){
    const dbRef = ref(this.db, '/');
    onValue(dbRef, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(dbRef);
  }
}

export default IcomoonFiles;
