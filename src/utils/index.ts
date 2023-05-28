interface DBRecord {
    id: number;
}
export function getMaxId<T extends DBRecord>(items: T[]){
    return Math.max(...items.map(item => item.id));
}

export function getNewId<T extends DBRecord>(items: T[]){
    return getMaxId(items) + 1;
}