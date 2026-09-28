import { View, Text, Pressable } from "react-native";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { usePathname, Redirect } from "expo-router";
import { Pill, Map, AlarmClock, CircleQuestionMark } from "lucide-react-native";
import { COLORS } from "@/presentation/theme/AppTheme";
import { layoutStyles } from "@/presentation/theme/DashboardLayoutTheme";

export default function DashboardLayout() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <Redirect href="/HomeScreen" />;
  }

  return (
    <View style={layoutStyles.container}>
      <Tabs style={layoutStyles.tabContainer}>
        {/* As telas injetadas aparecerão aqui */}
        <TabSlot />

        <TabList style={layoutStyles.hiddenTabList}>
          <TabTrigger name="admScreen" href="/admScreen"/>
          <TabTrigger name="HomeScreen" href="/HomeScreen" />
          <TabTrigger name="TelaMedicamento" href="/TelaMedicamento" />
          <TabTrigger name="MapaSus" href="/MapaSus" />
          <TabTrigger name="Lembretes" href="LembretesScreen" />
          <TabTrigger name="ajudaScreen" href="/ajudaScreen" />
        </TabList>

        <View style={layoutStyles.gridContainer}>
          <View style={layoutStyles.row}>
            <TabTrigger name="TelaMedicamento" asChild>
              <Pressable style={layoutStyles.buttonMedicamento}>
                <Pill
                  size={35}
                  color={COLORS.deepPurple}
                  style={layoutStyles.buttonIcon}
                />
                <Text style={layoutStyles.buttonText}>Remédios</Text>
              </Pressable>
            </TabTrigger>

            <TabTrigger name="MapaSus" asChild>
              <Pressable style={layoutStyles.buttonMapaSus}>
                <Map
                  size={35}
                  color={COLORS.deepPurple}
                  style={layoutStyles.buttonIcon}
                />
                <Text style={layoutStyles.buttonText}>Mapa</Text>
              </Pressable>
            </TabTrigger>
          </View>

          <View style={layoutStyles.row}>
            <TabTrigger name="Lembretes" asChild>
              <Pressable style={layoutStyles.buttonLembretes}>
                <AlarmClock
                  size={35}
                  color={COLORS.deepPurple}
                  style={layoutStyles.buttonIcon}
                />
                <Text style={layoutStyles.buttonText}>Lembretes</Text>
              </Pressable>
            </TabTrigger>

            <TabTrigger name="ajudaScreen" asChild>
              <Pressable style={layoutStyles.buttonAjuda}>
                <CircleQuestionMark
                  size={35}
                  color={COLORS.deepPurple}
                  style={layoutStyles.buttonIcon}
                />
                <Text style={layoutStyles.buttonText}>Ajuda</Text>
              </Pressable>
            </TabTrigger>
          </View>
        </View>
      </Tabs>
    </View>
  );
}
