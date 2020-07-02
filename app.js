var vm1 = new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText:'',
        guestName: [],
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

var vm2 = new Vue({
    el: '#navigation',
    data: {
        appName: 'Guest List',
        navLinks: [
            {name: "Home", id: 1, url: "https://www.wikipedia.com"},
            {name: "Upcoming events", id: 2, url: "https://www.google.com"},
            {name: "Guest Benefits", id: 3, url: "https://www.amazon.com"},
            {name: "Latest News", id: 4, url: "https://www.youtube.com"}
        ]
    },
    methods: {

    }
})

console.log(vm1)

