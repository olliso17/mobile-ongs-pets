import { Foundation, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { theme } from "../../theme";

export default function TabLayout() {
    return(
        <Tabs screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarActiveTintColor:theme.colors.white,
            tabBarInactiveTintColor:theme.colors.gray[600],
            tabBarStyle:{
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
                    tabBarIcon: ({size, color})=><Foundation name="home" size={size} color={color}/>
                }}/>

            {/* <Tabs.Screen
             name="ongs"
              options={{
                    tabBarIcon: ({size, color})=><Foundation name="home" size={size} color={color}/>
                }}/>
                
            <Tabs.Screen
             name="pets"
              options={{
                    tabBarIcon: ({size, color})=><Foundation name="home" size={size} color={color}/>
                }}/> */}
            {/* <Tabs.Screen name=""/> */}
        </Tabs>
    )
}