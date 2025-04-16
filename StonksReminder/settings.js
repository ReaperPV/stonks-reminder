import { @Vigilant, @TextProperty, @ButtonProperty, @SliderProperty } from 'Vigilance';

@Vigilant("PestFarming")
class Settings {
    @SliderProperty({
      name: "Volume",
      description: "The volume of the final alert",
      category: "General",
      min: 1,
      max: 10,
    })
    volume = 5;

    @TextProperty({
        name: "Alert Sound",
        description: "The sound played for the alert",
        category: "General",
        placeholder: "random.anvil_land"
    })
    alertSound = "random.anvil_land";

    @ButtonProperty({
      name: "Open Sounds",
      description: "Opens a list of available sounds",
      category: "General",
      placeholder: "Open"
  })
  buttonAction() {
    java.awt.Desktop.getDesktop().browse(new java.net.URI("https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/mapping-and-modding-tutorials/2213619-1-8-all-playsound-sound-arguments"));
  }
    
    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "Some general settings...")
    }
}

export default new Settings();
