    H5.define("System.Runtime.Serialization.SerializationEntry", {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new System.Runtime.Serialization.SerializationEntry(); }
            }
        },
        fields: {
            _name: null,
            _value: null,
            _type: null
        },
        props: {
            Value: {
                get: function () {
                    return this._value;
                }
            },
            Name: {
                get: function () {
                    return this._name;
                }
            },
            ObjectType: {
                get: function () {
                    return this._type;
                }
            }
        },
        ctors: {
            $ctor1: function (entryName, entryValue, entryType) {
                this.$initialize();
                this._name = entryName;
                this._value = entryValue;
                this._type = entryType;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = H5.addHash([7645431029, this._name, this._value, this._type]);
                return h;
            },
            equals: function (o) {
                if (!H5.is(o, System.Runtime.Serialization.SerializationEntry)) {
                    return false;
                }
                return H5.equals(this._name, o._name) && H5.equals(this._value, o._value) && H5.equals(this._type, o._type);
            },
            $clone: function (to) {
                var s = to || new System.Runtime.Serialization.SerializationEntry();
                s._name = this._name;
                s._value = this._value;
                s._type = this._type;
                return s;
            }
        }
    });
