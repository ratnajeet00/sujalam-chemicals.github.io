import React from "react";
import { View, Text, StyleSheet } from "react-native";
const QualityPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quality Commitment</Text>
      <Text style={styles.paragraph}>
        We at "Sujalam Chemicals" are committed to enhancing the satisfaction of
        our interested parties while manufacturing and supplying Bulk Drugs,
        Pharmaceuticals/Intermediates, and Specialty Chemicals. As a company, we
        take responsibility for the quality of our products and strive to ensure
        the safety of people and the environment.
      </Text>
      <Text style={styles.subHeading}>Our Commitments:</Text>
      <Text style={styles.listItem}>
        Effective implementation of Quality Management System to satisfy all
        applicable requirements.
      </Text>
      <Text style={styles.listItem}>
        Continual improvement in the overall performance of "Sujalam Chemicals".
      </Text>
      <Text style={styles.listItem}>
        Our team of competent and dedicated people strives to provide high-quality
        products, excellent technical support, and the best services to our customers.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    marginBottom: 5,
  },
});
export default QualityPage;
