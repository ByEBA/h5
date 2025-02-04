    H5.define("System.Collections.ObjectModel.ReadOnlyCollection$1", function (T) { return {
        inherits: [System.Collections.Generic.IList$1(T),System.Collections.IList,System.Collections.Generic.IReadOnlyList$1(T)],
        statics: {
            methods: {
                IsCompatibleObject: function (value) {
                    return ((H5.is(value, T)) || (value == null && H5.getDefaultValue(T) == null));
                }
            }
        },
        fields: {
            list: null
        },
        props: {
            Count: {
                get: function () {
                    return System.Array.getCount(this.list, T);
                }
            },
            System$Collections$ICollection$IsSynchronized: {
                get: function () {
                    return false;
                }
            },
            System$Collections$ICollection$SyncRoot: {
                get: function () {
                    return this;
                }
            },
            Items: {
                get: function () {
                    return this.list;
                }
            },
            System$Collections$IList$IsFixedSize: {
                get: function () {
                    return true;
                }
            },
            System$Collections$Generic$ICollection$1$IsReadOnly: {
                get: function () {
                    return true;
                }
            },
            System$Collections$IList$IsReadOnly: {
                get: function () {
                    return true;
                }
            }
        },
        alias: [
            "Count", ["System$Collections$Generic$IReadOnlyCollection$1$" + H5.getTypeAlias(T) + "$Count", "System$Collections$Generic$IReadOnlyCollection$1$Count"],
            "Count", "System$Collections$ICollection$Count",
            "Count", "System$Collections$Generic$ICollection$1$" + H5.getTypeAlias(T) + "$Count",
            "getItem", ["System$Collections$Generic$IReadOnlyList$1$" + H5.getTypeAlias(T) + "$getItem", "System$Collections$Generic$IReadOnlyList$1$getItem"],
            "contains", "System$Collections$Generic$ICollection$1$" + H5.getTypeAlias(T) + "$contains",
            "copyTo", "System$Collections$Generic$ICollection$1$" + H5.getTypeAlias(T) + "$copyTo",
            "GetEnumerator", ["System$Collections$Generic$IEnumerable$1$" + H5.getTypeAlias(T) + "$GetEnumerator", "System$Collections$Generic$IEnumerable$1$GetEnumerator"],
            "indexOf", "System$Collections$Generic$IList$1$" + H5.getTypeAlias(T) + "$indexOf",
            "System$Collections$Generic$ICollection$1$IsReadOnly", "System$Collections$Generic$ICollection$1$" + H5.getTypeAlias(T) + "$IsReadOnly",
            "System$Collections$Generic$IList$1$getItem", "System$Collections$Generic$IList$1$" + H5.getTypeAlias(T) + "$getItem",
            "System$Collections$Generic$IList$1$setItem", "System$Collections$Generic$IList$1$" + H5.getTypeAlias(T) + "$setItem",
            "System$Collections$Generic$ICollection$1$add", "System$Collections$Generic$ICollection$1$" + H5.getTypeAlias(T) + "$add",
            "System$Collections$Generic$ICollection$1$clear", "System$Collections$Generic$ICollection$1$" + H5.getTypeAlias(T) + "$clear",
            "System$Collections$Generic$IList$1$insert", "System$Collections$Generic$IList$1$" + H5.getTypeAlias(T) + "$insert",
            "System$Collections$Generic$ICollection$1$remove", "System$Collections$Generic$ICollection$1$" + H5.getTypeAlias(T) + "$remove",
            "System$Collections$Generic$IList$1$removeAt", "System$Collections$Generic$IList$1$" + H5.getTypeAlias(T) + "$removeAt"
        ],
        ctors: {
            ctor: function (list) {
                this.$initialize();
                if (list == null) {
                    throw new System.ArgumentNullException.$ctor1("list");
                }
                this.list = list;
            }
        },
        methods: {
            getItem: function (index) {
                return System.Array.getItem(this.list, index, T);
            },
            System$Collections$Generic$IList$1$getItem: function (index) {
                return System.Array.getItem(this.list, index, T);
            },
            System$Collections$Generic$IList$1$setItem: function (index, value) {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$IList$getItem: function (index) {
                return System.Array.getItem(this.list, index, T);
            },
            System$Collections$IList$setItem: function (index, value) {
                throw new System.NotSupportedException.ctor();
            },
            contains: function (value) {
                return System.Array.contains(this.list, value, T);
            },
            System$Collections$IList$contains: function (value) {
                if (System.Collections.ObjectModel.ReadOnlyCollection$1(T).IsCompatibleObject(value)) {
                    return this.contains(H5.cast(H5.unbox(value, T), T));
                }
                return false;
            },
            copyTo: function (array, index) {
                System.Array.copyTo(this.list, array, index, T);
            },
            System$Collections$ICollection$copyTo: function (array, index) {
                if (array == null) {
                    throw new System.ArgumentNullException.$ctor1("array");
                }

                if (System.Array.getRank(array) !== 1) {
                    throw new System.ArgumentException.$ctor1("array");
                }

                if (System.Array.getLower(array, 0) !== 0) {
                    throw new System.ArgumentException.$ctor1("array");
                }

                if (index < 0) {
                    throw new System.ArgumentOutOfRangeException.$ctor1("index");
                }

                if (((array.length - index) | 0) < this.Count) {
                    throw new System.ArgumentException.ctor();
                }
                var items;
                if (((items = H5.as(array, System.Array.type(T)))) != null) {
                    System.Array.copyTo(this.list, items, index, T);
                } else {
                    var targetType = (H5.getType(array).$elementType || null);
                    var sourceType = T;
                    if (!(H5.Reflection.isAssignableFrom(targetType, sourceType) || H5.Reflection.isAssignableFrom(sourceType, targetType))) {
                        throw new System.ArgumentException.ctor();
                    }
                    var objects;
                    if (!(((objects = H5.as(array, System.Array.type(System.Object)))) != null)) {
                        throw new System.ArgumentException.ctor();
                    }

                    var count = System.Array.getCount(this.list, T);
                    for (var i = 0; i < count; i = (i + 1) | 0) {
                        objects[System.Array.index(H5.identity(index, ((index = (index + 1) | 0))), objects)] = System.Array.getItem(this.list, i, T);
                    }
                }
            },
            GetEnumerator: function () {
                return H5.getEnumerator(this.list, T);
            },
            System$Collections$IEnumerable$GetEnumerator: function () {
                return H5.getEnumerator(H5.cast(this.list, System.Collections.IEnumerable));
            },
            indexOf: function (value) {
                return System.Array.indexOf(this.list, value, 0, null, T);
            },
            System$Collections$IList$indexOf: function (value) {
                if (System.Collections.ObjectModel.ReadOnlyCollection$1(T).IsCompatibleObject(value)) {
                    return this.indexOf(H5.cast(H5.unbox(value, T), T));
                }
                return -1;
            },
            System$Collections$Generic$ICollection$1$add: function (value) {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$IList$add: function (value) {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$Generic$ICollection$1$clear: function () {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$IList$clear: function () {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$Generic$IList$1$insert: function (index, value) {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$IList$insert: function (index, value) {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$Generic$ICollection$1$remove: function (value) {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$IList$remove: function (value) {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$Generic$IList$1$removeAt: function (index) {
                throw new System.NotSupportedException.ctor();
            },
            System$Collections$IList$removeAt: function (index) {
                throw new System.NotSupportedException.ctor();
            }
        }
    }; });
