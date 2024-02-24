import { Foundation, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { theme } from "../../theme";

export default function TabLayout() {
    return(
        <Tabs screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarActiveTintColor:theme.colors.brown[500],
            tabBarInactiveTintColor:theme.colors.brown[950],
            tabBarStyle:{
                marginLeft:10,
                backgroundColor:theme.colors.brown[50],
                width:'95%',
                padding:10,
                borderRadius:10,
                borderColor:theme.colors.black
            }
        }}>
            <Tabs.Screen 
                name="index"
                options={{
                    tabBarIcon: ({size, color})=><Foundation name="home" size={size} color={color}/>
                }}/>

            <Tabs.Screen 
            name="login"
             options={{
                    tabBarIcon: ({size, color})=><Ionicons name="person" size={size} color={color}/>
                }}/>

            <Tabs.Screen
             name="add_user"
              options={{
                    tabBarIcon: ({size, color})=><Ionicons name="person-add" size={size} color={color}/>
                }}/>

            {/* <Tabs.Screen
             name="ongs"
              options={{
                    tabBarIcon: ({size, color})=><Ionicons name="business" size={size} color={color}/>
                }}/>
                
            <Tabs.Screen
             name="pets"
              options={{
                    tabBarIcon: ({size, color})=><Ionicons name="paw" size={size} color={color}/>
                }}/> */}
            {/* <Tabs.Screen name=""/> */}
        </Tabs>
    )
}