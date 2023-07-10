import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { stageName } from '../Card/utils';

const styles = StyleSheet.create({
  page: {
    padding: '40px',
    backgroundColor: '#FFDAD3',
  },
  title: {
    color: '#F46142',
    fontSize: '30pt',
    fontWeight: 'bold',
    marginBottom: '20pt',
    textAlign: 'center',
  },
  section: {
    marginBottom: '10pt',
  },
  heading: {
    fontSize: '16pt',
    fontWeight: 'bold',
    marginBottom: '5pt',
  },
  content: {
    fontSize: '12pt',
    marginBottom: '5pt',
  },
  stage: {
    color: '#F46142',
    fontSize: '16pt',
    fontWeight: 'bold',
    marginBottom: '16pt',
  }
});

const RecommendationPDF = () => {
  const recommendationStr = localStorage.getItem('recommendation');
  const recommendation = recommendationStr ? JSON.parse(recommendationStr) : null;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Recomendação</Text>
        <Text style={styles.stage}>Etapa: { stageName(recommendation.recommendedNotWorking.Stage_idStage)}</Text>
        {recommendation.recommendedIdeal !==
          "Nenhuma recomendação ideal encontrada."  ? (
          <View style={styles.section}>
            <Text style={styles.heading}>Ferramenta: {recommendation.recommendedIdeal.name_pt}</Text>
            <Text style={styles.content}>QUANDO USAR</Text>
            <Text style={styles.content}>{recommendation.recommendedIdeal.toUse}</Text>
          </View>
        ): null}
        {recommendation.recommendedSimilar !==
          "Nenhuma recomendação parecida encontrada."  ? (
          <View style={styles.section}>
            <Text style={styles.heading}>Ferramenta: {recommendation.recommendedSimilar.name_pt}</Text>
            <Text style={styles.content}>QUANDO USAR</Text>
            <Text style={styles.content}>{recommendation.recommendedSimilar.toUse}</Text>
          </View>
        ): null}
        { recommendation?.recommendedNotWorking !== "Nenhuma recomendação que não funciona encontrada." ? (
          <View style={styles.section}>
            <Text style={styles.heading}>Ferramenta: {recommendation.recommendedNotWorking.name_pt}</Text>
            <Text style={styles.content}>QUANDO USAR</Text>
            <Text style={styles.content}>{recommendation.recommendedNotWorking.toUse}</Text>
            
          </View>
        ): null}
      </Page>
    </Document>
  );
};

export default RecommendationPDF;
