List.remove({});
List.insert({
    helpToFind: true,
    array: []
})

Meteor.publish('List', function () {
    try{
        return List.find({});
    }catch(error){
        console.log(error);
    }
});

Meteor.methods({
    addToList: function (message) {
        var list = List.findOne({helpToFind: true}),
            newArray = list.array;

        newArray.push({
            text:message
        });
        List.update({_id: list._id}, {$set: {
            array: newArray
        }})
    },
    removeFromList: function (index) {
        var list = List.findOne({helpToFind: true}),
            newArray = list.array;

        newArray.splice(index, 1);
        List.update({_id: list._id}, {$set: {
            array: newArray
        }})
    }
});