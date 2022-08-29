<template>
    <div>
        <aside id="sidebar">

            <div id="nav-blog" class="sidebar-item">
                <h3>Puedes hacer esto</h3>
                <a href="#" class="btn btn-success">Crear articulo</a>

            </div>

            <div id="search" class="sidebar-item">
                <h3>Buscador</h3>
                <p>Encuentra el articulo que buscas</p>
                <form>

                    <input type="text" name="search" />
                    <input type="submit" name="search" value="Buscar" class="btn" />

                </form>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'SidebarComp'
}
</script>

<style lang="scss" scoped>
</style>