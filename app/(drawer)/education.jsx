import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

const Guichets = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Education à la sexualité",
        }}
      />
      <ScrollView className=" bg-white" style={{ marginTop: -25, padding: 15 }}>
        <View>
          <View>
            <Text className="py-2 text-lg font-Iblack">
              Education complète à la sexualité
            </Text>
            <Text className="text-base">
              Ces informations clés sur la sexualité est le fruit de travail
              acharné de plusieurs partenaires œuvrant sur la santé sexuelle de
              la femme et de la jeune fille ainsi que la participation des
              professeurs agrées d’université de la région de l’est de la
              république Démocratique du Congo, qui ont documentés par des
              notions pratiques, ont levés des équivoques sur certains mythes et
              tabous de la sexualité, et ont proposés des recommandations clés à
              partager avec l’ensemble des pays de la région. Ce contenu de
              l’ECS répond de manière appropriée au contexte et aux besoins
              spécifiques des jeunes de notre contré pour être efficace.
            </Text>
          </View>

          <View className="mt-3">
            <Text className="text-base  font-Ibold py-2">
              I. Qu’est-ce-que l’ECS
            </Text>
            <Text className="text-base">
              L’éducation complète à la sexualité est définie comme une manière
              d’aborder l’enseignement de la sexualité et des relations
              interpersonnelles adaptée à l’âge, culturellement pertinente et
              fondée sur une information scientifiquement précise, réaliste et
              s’abstenant de jugements de valeur.
            </Text>
          </View>

          <View className="mt-3">
            <Text className="text-base font-Ibold py-2">
              II. Importance de l’ECS
            </Text>
            <Text className="text-base">
              Il est clairement établi que l’ECS a un impact positif sur la
              santé sexuelle et reproductive (SSR), notamment en contribuant à
              réduire les infections sexuellement transmissibles (IST), le virus
              de l’immunodéficience humaine (VIH) et les grossesses non désirées
              car elle aide les jeunes à acquérir les connaissances et
              compétences nécessaires pour faire des choix conscients, sains et
              respectueux concernant les relations interpersonnelles et la
              sexualité.
            </Text>
          </View>

          <View className="mt-3 pb-3">
            <Text className="text-base  font-Ibold py-2">
              III. Définitions des termes clés
            </Text>
            <View className="mb-2 ">
              <Text className="text-secondary font-Ibold text-base mb-2">
                . Le sexe :
              </Text>
              <Text className="text-base">
                fait référence aux attributs physiques permettant d’identifier
                une personne comme étant un homme ou une femme. Le genre : fait
                référence aux idées et attentes largement partagées en ce qui
                concerne les femmes et les hommes. Il s’agit des
                caractéristiques et capacités typiquement féminines et
                masculines, tout comme des attentes partagées sur la manière
                dont les femmes et les hommes doivent agir dans Viewerses
                situations.
              </Text>
            </View>
            <View className="mb-2">
              <Text className="text-base text-secondary font-Ibold mb-2">
                . L’égalité du genre :
              </Text>
              <Text className="text-base">
                signifie que les hommes et les femmes jouissent du même statut.
                Ils bénéficient des mêmes opportunités pour atteindre leurs
                objectifs en matière de droits humains et leur potentiel afin de
                contribuer et tirer profit de toutes les sphères de la société
                (économiques, politiques, sociales et culturelles).
              </Text>
            </View>
            <View className="mb-2">
              <Text className="text-base text-secondary font-Ibold mb-2">
                . L’équité du genre :
              </Text>
              <Text className="text-base">
                Se réfère au fait d’être juste à l’égard des hommes et des
                femmes. L’équité des genres conduit à l’égalité des genres. A
                titre d’exemple, une politique de discrimination positive qui
                promeut un soutien accru pour les entreprises appartenant aux
                femmes peut être équitable à l’égard des genres car elle a pour
                conséquence d’assurer des droits égaux entre hommes et femmes.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#a00113" />
    </SafeAreaView>
  );
};

export default Guichets;
