import Invoice from "./Invoice";
import ConversionExplanation from "./ConversionExplanation";
import ExtractTableComponent from "./FileReader";

export default function ConversionPage() {
    
    return (
        <div>
            <Invoice />
            <ConversionExplanation />
            <ExtractTableComponent />
        </div>
    );
}