import { getDatabase, ref, set, onValue, off } from "firebase/database";
import { firebaseApp } from "./firebase";

class IcomoonFiles{
  db = getDatabase(firebaseApp);

  icomoonFiles(files) {
    const dbRef = ref(this.db, '/');
    set(dbRef, files);
  }

  syncFiles(onUpdate){
    const dbRef = ref(this.db, `books`);
    onValue(dbRef, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(dbRef);
  }
}

export default IcomoonFiles;
