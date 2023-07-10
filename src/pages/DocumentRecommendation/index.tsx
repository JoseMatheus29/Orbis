import { PDFViewer } from "@react-pdf/renderer";
import RecommendationPDF from "../../components/RecommendationPDF";

const DocumentRecommendation = () => {

    
    return (
            <div style={{ width: '100vw', height: '100vh' }}>
                <PDFViewer style={{ width: '100%', height: '100%' }}>
                    <RecommendationPDF 
                    />
                </PDFViewer>
            </div>
    )
}

export default DocumentRecommendation;