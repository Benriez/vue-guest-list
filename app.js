new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText:'',
        guestName: [],
        appStyles: {
            marginTop: '25px',
        },
        eventCapacity: 25,
        eventCapacityPercentage: 0
    },
    //methods rerender always even if there is no change to its data displays
    methods: {
        formSubmitted: function(){
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100){
                this.guestName.push(this.newNameText)
                this.newNameText= ''
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)
            }else{
                alert('error')
            }
        },
        keyPressed: function(){
            console.log("key pressed")
        }
    },
    //only rerender when the dependency is changed >> more efficient
    computed: {
        sortNames: function(){
            return this.guestName.sort()
        }
    },
    //observes, the function runs on each change 
    watch: {
        guestName: function(data){
            console.log('watch triggerd')
        }
    },
    filters: {
        formatName: function(value){
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
        }
    }
});