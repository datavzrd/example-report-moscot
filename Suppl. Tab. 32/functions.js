function custom_func_3b5b066714d7a2626272b20719b8ff33(value) { try { 
    const items = value
        .replace(/[\[\]']/g, '')
        .split(',')
        .map(item => item.trim())
        .sort();

    return items.map(item =>
        `<span style="display: inline-block; padding: 5px 10px; margin: 5px; background-color: grey; color: white; border-radius: 15px;">${item}</span>`
    ).join('');
 } catch (e) { datavzrd.custom_error(e, 'TF_name') }}
