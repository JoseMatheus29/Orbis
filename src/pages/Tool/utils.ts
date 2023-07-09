export function stageName(stage: string) {
    if(stage == '3') {
        return 'ANALISAR';
    } else if( stage == '4') {
        return 'PROJETAR';
    } else if( stage == '5') {
        return 'AVALIAR'
    }
}


export function imgTool(name: string){
    let pathImg
    const listTool = ['Cartão de teste', 'Mapa de estórias do usuário', 'Questionários validado', 'Cartão de aprendizado', 'Mapa de empatia', 'Jornada do usuário', 'Proposta de valor', 'Esboço sequencial', 'Análise de competidores']
    for (const element in listTool) {
        if(listTool[element] == name){
            const nameTool = name.replace(/ /g, "") + '.svg'
            pathImg = '/src/assets/img_tools/'+nameTool
        }
    }
    return pathImg

}