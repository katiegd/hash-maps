// Creates the hashMap array of empty arrays
function createHashMap(data) {
  const capacity = data.length;
  let map = new Array(capacity).fill(null).map(() => []);

  // Creates the hash code based on a given key.
  function hash(key) {
    let hashCode = 0;
    const prime = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  }

  // Adds the key value pair to the hash map
  function set(key, value) {
    const index = hash(key);
    const bucket = map[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey] = bucket[i];
      if (existingKey === key) {
        bucket[i] = [key, value];
        return;
      }
    }
    bucket.push([key, value]);
  }

  // Retrieves the value that is assigned to the input key
  function get(key) {
    const index = hash(key);
    const bucket = map[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey] = bucket[i];
      if (existingKey === key) {
        return bucket[i];
      }
    }
    return null;
  }

  // Returns true/false if the key exists in the hash map
  function has(key) {
    const index = hash(key);
    const bucket = map[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey] = bucket[i];
      if (existingKey === key) {
        return true;
      }
    }
    return false;
  }

  // Removes the key & value from the hash map
  function remove(key) {
    const index = hash(key);
    const bucket = map[index];

    for (let i = 0; i < bucket.length; i++) {
      const [existingKey] = bucket[i];
      if (existingKey === key) {
        bucket.splice(i, 1);
        console.log(`${key} has been removed.`);
        return true;
      }
    }
    console.log(`${key} was not found.`);
    return false;
  }

  // Returns the number of items in the hash map
  function length() {
    let count = 0;
    for (let i = 0; i < map.length; i++) {
      const bucket = map[i];
      for (let i = 0; i < bucket.length; i++) {
        count++;
      }
    }
    return count;
  }

  // Clears everything from the hash map
  function clear() {
    for (let i = 0; i < map.length; i++) {
      map[i] = [];
    }
  }

  // Returns array of all the keys in the hash map
  function keys() {
    let keyArray = [];
    for (i = 0; i < map.length; i++) {
      const bucket = map[i];
      for (j = 0; j < bucket.length; j++) {
        const [key] = bucket[j];
        keyArray.push(key);
      }
    }
    return keyArray;
  }

  // Returns array of all the values in the hash map
  function values() {
    let valueArray = [];
    for (i = 0; i < map.length; i++) {
      const bucket = map[i];
      for (j = 0; j < bucket.length; j++) {
        const [, value] = bucket[j];
        valueArray.push(value);
      }
    }
    return valueArray;
  }

  // Returns array of all the key/value pairs in the hash map
  function entries() {
    let entries = [];
    for (i = 0; i < map.length; i++) {
      const bucket = map[i];
      for (j = 0; j < bucket.length; j++) {
        const [key, value] = bucket[j];
        let keyAndValue = [key, value];
        entries.push(keyAndValue);
      }
    }
    return entries;
  }

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
    map,
  };
}

const sampleData = [
  { key: "name", value: "Alice" },
  { key: "age", value: 30 },
  { key: "email", value: "alice@example.com" },
  { key: "city", value: "Wonderland" },
  { key: "occupation", value: "Explorer" },
  { key: "hobby", value: "Chess" },
  { key: "favoriteColor", value: "Blue" },
  { key: "pet", value: "Cat" },
  { key: "language", value: "JavaScript" },
  { key: "framework", value: "React" },
  { key: "hobbies", value: "climbing" },
  { key: "foods", value: "pizza" },
];

let hashMap = createHashMap(sampleData);

sampleData.forEach(({ key, value }) => {
  hashMap.set(key, value);
});

console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());

console.log(hashMap.length());
const removePet = hashMap.remove("pet");
console.log(hashMap.length());
console.log(hashMap.map);
hashMap.clear();
console.log(hashMap.map);
