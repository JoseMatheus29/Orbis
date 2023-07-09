export function stageName(stage: string) {
    if(stage == '3') {
        return 'Analisar';
    } else if( stage == '4') {
        return 'Projetar';
    } else if( stage == '5') {
        return 'Avaliar'
    }
}

export function participantsName(participants: string) {
    if(participants == '3') {
        return '4 ou +';
    } else if( participants == '2') {
        return '2-3';
    } else if(participants == '1') {
        return '1'
    }
}

export function typeOfDataName(type: string) {
    if(type == '3') {
        return 'Ambos';
    } else if( type == '2') {
        return 'Qualitativo';
    } else if(type == '1') {
        return 'Quantitativo'
    }
}


