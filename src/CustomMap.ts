export interface Mappable{
    location:{
        lat:number,
        lng:number
    },
    markerContent():string
}
export class CustomMap{
    private googleMap:google.maps.Map;
    
    constructor(divId: string) {
        this.googleMap=new google.maps.Map(document.getElementById(divId) as HTMLElement,{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        })
    }

    //create a marker with given lat and lng
    addMarker(mappable: Mappable):void{

        const marker = new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:mappable.location.lat,
                lng:mappable.location.lng
            }
        })
        
        //creating info window
        const InfoWindow=new google.maps.InfoWindow({
            content: mappable.markerContent()
        })

        //adding event listner to show the info window
        marker.addListener('click',()=>{
            InfoWindow.open(this.googleMap, marker)
        })



    }
}